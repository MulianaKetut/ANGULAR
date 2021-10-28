export class Task {
  static nextId: number = 1;

  constructor(
    public taskName: string,
    public isCompleted: boolean,
    public category: string,
    public id: number = 0
  ) {
    this.id = id ? id : Task.nextId++;
  }
}
