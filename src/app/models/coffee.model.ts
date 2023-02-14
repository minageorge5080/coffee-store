export class Coffee {
  public id: string;
  public uid: string;
  public blend_name: string;
  public origin: string;
  public variety: string;
  public notes: string;
  public intensifier: string;
  public imagePath: string;

  constructor(id: string, uid: string, blend_name: string, origin: string, variety: string, notes: string, intensifier: string, imagePath: string) {
    this.id = id;
    this.uid = uid;
    this.blend_name = blend_name;
    this.origin = origin;
    this.variety = variety;
    this.notes = notes;
    this.intensifier = intensifier;
    this.imagePath = imagePath
  }
}
