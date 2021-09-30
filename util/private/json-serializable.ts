export class JsonSerializable {
  public toJson(): any {
    return JSON.parse(JSON.stringify(this));
  }

  public toString(): string {
    return JSON.stringify(this);
  }
}
