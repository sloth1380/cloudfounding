import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("projects")
export class Projects {

    @PrimaryGeneratedColumn({ name: "id"})
    id?: number;

    @Column({ name: "accounts_id"})
    accounts_id?: string;

    //@Column({ name: "accounts_id"})
    //project_title?: string;

    //@Column({ name: "accounts_id"})
    //project_body?: string;
    
    //@Column({ name: "accounts_id"})
    //project_category?: string;
    
    //@Column({ name: "accounts_id"})
    //open_date?: string;
    
    //@Column({ name: "accounts_id"})
    //close_date?: string;
    
    @Column({ name: "deleted_at"})
    deleted_at?: string;
    
    @Column({ name: "created_at"})
    created_at?: string;
    
    @Column({ name: "created_user"})
    created_user?: string;

    @Column({ name: "updated_at"})
    updated_at?: string;

    @Column({ name: "updated_user"})
    updated_user?: string;
}