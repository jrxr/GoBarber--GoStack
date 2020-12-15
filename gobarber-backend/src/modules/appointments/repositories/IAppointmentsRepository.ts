import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllnMonthFromProviderDTO from '../dtos/IFindAllnMonthFromProviderDTO';
import IFindAllnDayFromProviderDTO from '../dtos/IFindAllnDayFromProviderDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date, provider_id: string): Promise<Appointment | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllnMonthFromProviderDTO,
  ): Promise<Appointment[]>;
  findAllInDayFromProvider(
    data: IFindAllnDayFromProviderDTO,
  ): Promise<Appointment[]>;
}
