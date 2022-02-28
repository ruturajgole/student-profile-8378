import { Dispatch, Service } from "futura";


export default class DataService implements Service <any, any> {
  private readonly dispatch: Dispatch<any>;

  constructor(dispatch: Dispatch<any>) {
    this.dispatch = dispatch;
  }

  public async handleRequest(req: any) {
    const result = await req.run();
    if (result !== undefined) {
        this.dispatch(result);
    }
  }

  public updateSubscriptions(subs: ReadonlyArray<any>) {
    //
  }
}

export { DataService };
