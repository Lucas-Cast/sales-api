import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { PersonnelModule } from './personnel/personnel.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [ClientsModule, PersonnelModule, ProductsModule, SalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
