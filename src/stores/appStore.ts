import User from '@models/User';
import { observable } from 'mobx';

class ObservableListStore {
  @observable private _rootNavigatorActionHorizontal: boolean;
  @observable private _user: User;

  constructor() {
    this._rootNavigatorActionHorizontal = false;
    this._user = new User();
  }

  public get rootNavigatorActionHorizontal(): boolean {
    return this._rootNavigatorActionHorizontal;
  }

  public set rootNavigatorActionHorizontal(value: boolean) {
    this._rootNavigatorActionHorizontal = value;
  }

  public get user(): User {
    return this._user;
  }

  public set user(value: User) {
    this._user = value;
  }
}

const observableListStore = new ObservableListStore();
export default observableListStore;
