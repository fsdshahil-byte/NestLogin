import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
       type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'Shahil@2002',
  database: 'nest_auth',
  autoLoadEntities: true,
  synchronize: true,
    }),

    AuthModule,
    UsersModule,
  ]
})
export class AppModule {}