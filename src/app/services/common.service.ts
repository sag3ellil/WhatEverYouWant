import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private _dashbordComponentID="1";
  private _isConnected = false;

  private _idUser = null;
  
  private _nameUser = null;
  
  private _phoneNumberUser = null;

  constructor() { }

  public get dashbordComponentID() {
    return this._dashbordComponentID;
  }
  public set dashbordComponentID(value) {
    this._dashbordComponentID = value;
  }

  public get phoneNumberUser() {
    return this._phoneNumberUser;
  }
  public set phoneNumberUser(value) {
    this._phoneNumberUser = value;
  }

  public get isConnected() {
    return this._isConnected;
  }
  public set isConnected(value) {
    this._isConnected = value;
  }

  public get idUser() {
    return this._idUser;
  }
  public set idUser(value) {
    this._idUser = value;
  }

  public get nameUser() {
    return this._nameUser;
  }
  public set nameUser(value) {
    this._nameUser = value;
  }
}
