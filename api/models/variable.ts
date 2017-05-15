import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Environment } from "./environment";

@Entity()
export class Variable {
    @PrimaryColumn()
    id: string;

    @Column({ nullable: true })
    key: string;

    @Column({ nullable: true })
    value: string;

    @Column({ default: false })
    isActive: boolean;

    @Column({ type: 'int' })
    sort: number;

    @ManyToOne(type => Environment, env => env.variables)
    environment: Environment;

}