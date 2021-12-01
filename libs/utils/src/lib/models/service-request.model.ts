import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  ValidateNested,
  IsArray,
} from 'class-validator';

import { User, RatingRequest } from '.';
import { ServiceRequestType } from '../enums';
import { IServiceRequest, uuid } from '../types';

export class ServiceRequest implements IServiceRequest {
  @IsUUID()
  id: uuid;

  @IsEnum(ServiceRequestType, { each: true })
  type: ServiceRequestType[];

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString({ each: true })
  included: string[];

  @IsString({ each: true })
  excluded: string[];

  @ValidateNested()
  @Type(() => User)
  provider: User;

  @IsUUID()
  providerId: uuid;

  @ValidateNested()
  @Type(() => RatingRequest)
  @IsOptional()
  rating?: RatingRequest;

  @IsUUID()
  ratingId: uuid;

  @IsDate()
  createdOn: Date;

  @IsDate()
  modifiedOn: Date;

  @IsDate()
  deletedOn: Date;
}
