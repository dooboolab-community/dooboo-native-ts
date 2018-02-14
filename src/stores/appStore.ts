import User from '@models/User';
import { observable } from 'mobx';

import moment from 'moment';
import 'moment/locale/ko';
import 'moment/locale/ja';
// import 'moment/locale/zh-cn';
// import 'moment/locale/es';
// import 'moment/locale/fr';
// import 'moment/locale/id';

class ObservableListStore {
  @observable
  private rootNavigator: any = null;
  @observable
  private rootNavigatorActionHorizontal: boolean = false;
  @observable
  private rootNavigatorParams: any = {};
  @observable
  private user: User = new User();

  public get $rootNavigator(): any  {
    return this.rootNavigator;
  }

  public set $rootNavigator(value: any ) {
    this.rootNavigator = value;
  }

  public get $rootNavigatorActionHorizontal(): boolean  {
    return this.rootNavigatorActionHorizontal;
  }

  public set $rootNavigatorActionHorizontal(value: boolean ) {
    this.rootNavigatorActionHorizontal = value;
  }

  public get $rootNavigatorParams(): any  {
    return this.rootNavigatorParams;
  }

  public set $rootNavigatorParams(value: any ) {
    this.rootNavigatorParams = value;
  }

  public get $user(): User {
    return this.user;
  }

  public set $user(value: User) {
    this.user = value;
  }
}

const observableListStore = new ObservableListStore();
export default observableListStore;
