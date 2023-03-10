import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    create(createCarDto: CreateCarDto): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Car & {
        carShare: import(".prisma/client").CarShare[];
        CarView: import(".prisma/client").CarView[];
        carModel: import(".prisma/client").CarModel;
        carOption: import(".prisma/client").CarOption;
        carEngineType: import(".prisma/client").CarEngine;
        carTransmition: import(".prisma/client").CarTransmition;
        images: import(".prisma/client").CarImage[];
        costFuel: import(".prisma/client").CostFuel[];
        users: import(".prisma/client").Users;
        costRepair: import(".prisma/client").CostRepair[];
        costChange: import(".prisma/client").CostChange[];
    })[]>;
    getUserCars(req: any): Promise<(import(".prisma/client").Car & {
        carShare: import(".prisma/client").CarShare[];
        CarView: import(".prisma/client").CarView[];
        carModel: import(".prisma/client").CarModel;
        carOption: import(".prisma/client").CarOption;
        carEngineType: import(".prisma/client").CarEngine;
        carTransmition: import(".prisma/client").CarTransmition;
        images: import(".prisma/client").CarImage[];
        costFuel: import(".prisma/client").CostFuel[];
        users: import(".prisma/client").Users;
        costRepair: import(".prisma/client").CostRepair[];
        costChange: import(".prisma/client").CostChange[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car & {
        carShare: import(".prisma/client").CarShare[];
        CarView: import(".prisma/client").CarView[];
        carModel: import(".prisma/client").CarModel & {
            brand: import(".prisma/client").CarBrand & {
                models: import(".prisma/client").CarModel[];
            };
        };
        carOption: import(".prisma/client").CarOption;
        carEngineType: import(".prisma/client").CarEngine;
        carTransmition: import(".prisma/client").CarTransmition;
        images: import(".prisma/client").CarImage[];
        costFuel: import(".prisma/client").CostFuel[];
        users: import(".prisma/client").Users;
        costRepair: import(".prisma/client").CostRepair[];
        costChange: import(".prisma/client").CostChange[];
    }, never>;
    getAddCarDetails(): Promise<{}>;
    update(id: string, updateCarDto: CreateCarDto): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car, never>;
    updateUserCars(req: any, updateCarDto: CreateCarDto[]): Promise<any[]>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car, never>;
}
