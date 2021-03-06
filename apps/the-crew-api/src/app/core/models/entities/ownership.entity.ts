import { IOwnership, uuid } from '@the-crew/common';
import { Column } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/ban-types
type Constructor = new (...args: any[]) => {};

/**
 * Mixin that will help in inheriting ownership property
 * i.e. `createdBy` and `modifiedBy`.
 * @param Base
 * @returns
 */
export function Ownership<IBase extends Constructor>(Base: IBase) {
  class OwnershipEntity extends Base implements IOwnership {
    @Column({
      type: 'uuid',
      nullable: true,
    })
    createdBy: uuid;

    @Column({
      type: 'uuid',
      nullable: true,
    })
    modifiedBy: uuid;
  }
  return OwnershipEntity;
}

export class OwnershipEntity implements IOwnership {
  @Column({
    type: 'uuid',
    nullable: true,
  })
  createdBy: uuid;

  @Column({
    type: 'uuid',
    nullable: true,
  })
  modifiedBy: uuid;
}
