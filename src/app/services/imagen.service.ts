import { Injectable } from "@angular/core";
import { Imagen } from "../clases/imagen";
import
{
  Plugins,
  CameraResultType,
  CameraSource,
  Capacitor,
} from "@capacitor/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { ToastController } from "@ionic/angular";
import { UploadMetadata } from "@angular/fire/storage/interfaces";
import { AngularFireDatabase } from "@angular/fire/database";
import *  as firebase from 'firebase';

const { Camera } = Plugins;

@Injectable({
  providedIn: "root",
})
export class ImagenService
{
  constructor(
    private storage: AngularFireStorage,
    private firebaseDB: AngularFireDatabase,
  ) { }


  /**
   * Subir foto del almacenamiento del dispositivo
   */
  async sacarFoto(): Promise<Imagen>
  {
    let imagen: Imagen = new Imagen();

    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64,
      correctOrientation: true,
      source: CameraSource.Prompt,
      promptLabelHeader: "Subir foto",
      promptLabelCancel: "Cancelar",
      promptLabelPhoto: "Subir desde galería",
      promptLabelPicture: "Nueva foto",
    })

    imagen.base64 = image.base64String;
    imagen.fecha = new Date().toUTCString();

    return imagen;
  }

  /**
   * Registra una imagen en la base de datos y la devuelve con su respectivo id y su url
   *  @imagen Imagen que se desea guardar
   * @rutaCarpetaStorage Ruta de la base de datos donde guardar el array, ej '/productos'
   */
  public async crearUnaImagen(
    imagen: Imagen,
    rutaCarpetaStorage: string
  ): Promise<Imagen> 
  {
    return new Promise(async (resolve) => 
    {
      let carpeta = rutaCarpetaStorage;

      // Se sube imagen a Base de Datos
      imagen.id = await this.firebaseDB.createPushId();
      console.log(imagen.id);
      // Se guarda imagen en el Storage
      const imagenStorage = await this.guardarImagen(imagen, carpeta);
      const URL = await imagenStorage.ref.getDownloadURL();

      imagen.base64 = null;
      imagen.url = URL;
      imagen.rutaStorage = imagenStorage.ref.child(`${rutaCarpetaStorage}/${imagen.id}`).toString();

      resolve(imagen);
    });

  }

  /**
   * Registra un array de imagenes en la base de datos, Guardando el archivo en Firebase.Storage y lo devuelve con sus respectivos id y url
   * @imagenes Array<Imagen> el array que se decea guardar
   * @rutaCarpetaStorage Ruta de la base de datos donde guardar el array, ej '/productos'
   */
  public crearArrayImagenes(
    imagenes: Array<Imagen>,
    rutaCarpetaStorage: string
  ): Promise<Array<Imagen>>
  {
    return new Promise(async (resolve) =>
    {
      // Se sube imagen a Base de Datos
      for (let imagen of imagenes) 
      {
        imagen.id = await this.firebaseDB.createPushId();
        let imagenStorage = await this.guardarImagen(imagen, rutaCarpetaStorage);
        let URL = await imagenStorage.ref.getDownloadURL();

        imagen.url = URL;
        imagen.base64 = null;
        imagen.rutaStorage = imagenStorage.ref.child(`${rutaCarpetaStorage}/${imagen.id}`).toString();

      }
      resolve(imagenes);
    })

  }

  public async guardarImagen(imagen: Imagen, carpeta: string)
  {
    console.log("Guardar imagen-----------------------");
    const metadata: UploadMetadata = {
      contentType: "image/jpeg",
    };
    // Se sube imagen al Firebase Storage
    return this.storage
      .ref(`${carpeta}/${imagen.id}`)
      .putString(imagen.base64, firebase.default.storage.StringFormat.BASE64, metadata)
  }

  /**
   * Crea una referencia en la carpeta imagenes de la base de datos (Realtime data base), y devuelve el parametro imagen pero con el id de referencia
   */
  private crear(imagen: Imagen)
  {
    imagen.base64 = null;

    return this.firebaseDB.database.ref("imagenes")
      .push()
      .then((snapshot) =>
      {
        imagen.id = snapshot.key;
        console.log('Creado correctamente');
        this.actualizar(imagen);
      })
      .catch(() => console.info("No se pudo realizar alta"));
  }

  public actualizar(imagen: Imagen): Promise<any>
  {
    return this.firebaseDB.database.ref("imagenes/" + imagen.id).update(imagen);
  }

  public borrar(imagen: Imagen): Promise<any>
  {
    return this.firebaseDB.database.ref("imagenes/" + imagen.id).remove();
  }

}
