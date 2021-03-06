import { Plugin, Cordova } from './plugin';
import { Observable } from '@reactivex/rxjs';
/**
 * @name MusicControls
 * @description
 * Music controls for Cordova applications.
 * Display a 'media' notification with play/pause, previous, next buttons, allowing the user to control the play.
 * Handle also headset event (plug, unplug, headset button).
 *
 * @usage
 * ```
 * import {MusicControls} from 'ionic-native';
 *
 * MusicControls.create({
 *   track       : 'Time is Running Out',        // optional, default : ''
 *   artist      : 'Muse',                       // optional, default : ''
 *   cover       : 'albums/absolution.jpg',      // optional, default : nothing
 *   // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
 *   //           or a remote url ('http://...', 'https://...', 'ftp://...')
 *   isPlaying   : true,                         // optional, default : true
 *   dismissable : true,                         // optional, default : false
 *
 *   // hide previous/next/close buttons:
 *   hasPrev   : false,      // show previous button, optional, default: true
 *   hasNext   : false,      // show next button, optional, default: true
 *   hasClose  : true,       // show close button, optional, default: false
 *
 *   // Android only, optional
 *   // text displayed in the status bar when the notification (and the ticker) are updated
 *   ticker    : 'Now playing "Time is Running Out"'
 *  });
 *
 *  MusicControls.subscribe().subscribe(action => {
 *
 *    switch(action) {
 *        case 'music-controls-next':
 *            // Do something
 *            break;
 *        case 'music-controls-previous':
 *            // Do something
 *            break;
 *        case 'music-controls-pause':
 *            // Do something
 *            break;
 *        case 'music-controls-play':
 *            // Do something
 *            break;
 *        case 'music-controls-destroy':
 *            // Do something
 *            break;
 *
 *        // Headset events (Android only)
 *        case 'music-controls-media-button' :
 *            // Do something
 *            break;
 *        case 'music-controls-headset-unplugged':
 *            // Do something
 *            break;
 *        case 'music-controls-headset-plugged':
 *            // Do something
 *            break;
 *        default:
 *            break;
 *    }
 *
 *  });
 *
 *  MusicControls.listen(); // activates the observable above
 *
 *  MusicControls.updateIsPlaying(true);
 *
 *
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-music-controls',
  pluginRef: 'MusicControls',
  repo: 'https://github.com/homerours/cordova-music-controls-plugin'
})
export class MusicControls {
  /**
   * Create the media controls
   * @param options {MusicControlsOptions}
   * @returns {Promise<any>}
   */
  @Cordova()
  static create(options: MusicControlsOptions): Promise<any> {return; }

  /**
   * Destroy the media controller
   * @returns {Promise<any>}
   */
  @Cordova()
  static destroy(): Promise<any> {return; }

  /**
   * Subscribe to the events of the media controller
   * @returns {Observable<any>}
   */
  @Cordova({
    observable: true
  })
  static subscribe(): Observable<any> {return; }

  /**
   * Start listening for events, this enables the Observable from the subscribe method
   */
  @Cordova({sync: true})
  static listen(): void {}

  /**
   * Toggle play/pause:
   * @param isPlaying {boolean}
   */
  @Cordova({sync: true})
  static updateIsPlaying(isPlaying: boolean): void {}
}
export interface MusicControlsOptions {
  track: string;
  artist: string;
  cover: string;
  isPlaying: boolean;
  dismissable: boolean;
  hasPrev: boolean;
  hasNext: boolean;
  hasClose: boolean;
  ticker: string;
}
