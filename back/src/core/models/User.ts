/**
 * https://typeorm.io/#/ 😉
 * Dont forget : If you add a new entities you need to add it in ./Database.ts
 */

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm'
import bcrypt from 'bcryptjs'

@Entity()
export default class User extends BaseEntity {
  private static SALT_ROUND = 8

  @PrimaryGeneratedColumn('uuid') //'uuid'
  id!: string

  @Column({ nullable: false, unique: true })
  email!: string

  @Column({ nullable: false })
  encryptedPassword!: string

  @Column({ nullable: false })
  firstname!: string

  @Column({ nullable: true })
  lastname!: string

  @Column({ nullable: true })
  birthdate!: string

  @Column({ nullable: true })
  gender!: string

  @CreateDateColumn()
  createdAt!: string

  @CreateDateColumn()
  updatedAt!: string

  /**
   * Hooks
   */
  @BeforeInsert()
  @BeforeUpdate()
  public hashPassword(): void | never {
    if (!this.encryptedPassword) {
      throw new Error('Password is not defined')
    }

    this.encryptedPassword = bcrypt.hashSync(this.encryptedPassword, User.SALT_ROUND)
  }

  /**
   * Methods
   */
  public checkPassword(uncryptedPassword: string): boolean {
    return bcrypt.compareSync(uncryptedPassword, this.encryptedPassword)
  }

  public toJSON(): User {
    const json: User = Object.assign({}, this)

    //delete json.password

    return json
  }
}
