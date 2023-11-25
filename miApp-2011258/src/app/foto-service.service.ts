import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Foto } from './camera/foto.model';
import { Platform } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class FotoServiceService {

  public fotos: Foto[] = [];
  private plataforma: Platform;

  constructor(plataforma : Platform) { 
    this.plataforma = plataforma;
  }

  public async addNewToGallery() {
    try {
      
      const capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      });

      const newPhoto: Foto = {
      filepath: capturedPhoto.path,
        webViewPath: capturedPhoto.webPath
      };

      this.fotos.unshift(newPhoto);
    } catch (error) {
      console.error('Error al capturar la foto:', error);
    }
  }
}

