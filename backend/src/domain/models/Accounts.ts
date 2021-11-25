import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("accounts")
export class Accounts {

    @PrimaryGeneratedColumn({ name: "id"})
    id?: number;

    @Column({ name: "name", type: "varchar"})
    name?: string;

    //@Column({ name: "birthday", type: "number"})
    //birthDay?: number;
}