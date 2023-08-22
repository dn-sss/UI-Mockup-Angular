import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  DevFwVersion: any;
  DevFwFileName: any;
  DevFwId: any;
  DevFwDate: any;
  DevFwComment: any;

  DevSensorVersion: any;
  DevSensorFileName: any;
  DevSensorId: any;
  DevSensorDate: any;
  DevSensorComment: any;

  DevSensorLoaderVersion: any;
  DevSensorLoaderFileName: any;
  DevSensorLoaderId: any;
  DevSensorLoaderDate: any;
  DevSensorLoaderComment: any;


  ngOnInit() {
    //this.DevFwVersion =
    //  this.DevFwFileName =
    //  this.DevFwId =
    //  this.DevFwDate =
    //  this.DevFwComment = ' ';

  }

  listChangeHandler(value: any) {

    if (value.target.id == 'DevFw') {
      if (value.target.selectedIndex == 0) {
        this.DevFwVersion =
          this.DevFwFileName =
          this.DevFwId =
          this.DevFwDate =
          this.DevFwComment = '';
      }
      else {
        this.DevFwVersion = `${Math.floor(Math.random() * 100)}`;
        this.DevFwFileName = `ota_${Math.floor(Math.random() * 10)}.bin`;
        this.DevFwId = 'MCU(AppFw)';
        this.DevFwDate = `${Date.now().toString()}`;
        this.DevFwComment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
      }
    }
    else if (value.target.id == 'DevSensor') {
      if (value.target.selectedIndex == 0) {
        this.DevSensorVersion =
          this.DevSensorFileName =
          this.DevSensorId =
          this.DevSensorDate =
          this.DevSensorComment = '';
      }
      else {
        this.DevSensorVersion = `${Math.floor(Math.random() * 100)}`;
        this.DevSensorFileName = `firmware_${Math.floor(Math.random() * 10)}.fpk`;
        this.DevSensorId = `IMX500(Sensor)`;
        this.DevSensorDate = `${Date.now().toString()}`;
        this.DevSensorComment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
      }
    }
    else if (value.target.id == 'DevSensorLoader') {
      if (value.target.selectedIndex == 0) {
        this.DevSensorLoaderVersion =
          this.DevSensorLoaderFileName =
          this.DevSensorLoaderId =
          this.DevSensorLoaderDate =
          this.DevSensorLoaderComment = '';
      }
      else {
        this.DevSensorLoaderVersion = `${Math.floor(Math.random() * 100)}`;
        this.DevSensorLoaderFileName = `loader_${Math.floor(Math.random() * 10)}.fpk`;
        this.DevSensorLoaderId = 'IMX500(SensorLoader)';
        this.DevSensorLoaderDate = `${Date.now().toString()}`;
        this.DevSensorLoaderComment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
      }
    }
  }
}
