import { AbstractVO } from "@/models/AbstractVO";

export type EntityServiceProps = {
  id: string;
  name: string;
  status: string;
};

export class EntityServiceModel extends AbstractVO<EntityServiceProps> {
  static create(props: EntityServiceProps) {
    return new EntityServiceModel(props);
  }
}
