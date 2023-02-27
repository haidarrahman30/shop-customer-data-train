import {Entity, Column, PrimaryColumn} from 'typeorm'

@Entity()
export class Customers{
  @PrimaryColumn({type:'int', nullable:false})
  id: number | undefined

  @Column({type:'varchar'})
  gender: string | undefined

  @Column({type:'integer' })
  age: number | undefined

  @Column({type:'integer'})
  annualIncome: number | undefined

  @Column({type:'integer'})
  spendingScore: number | undefined

  @Column({type:'varchar'})
  profession: string | undefined

  @Column({type:'integer'})
  workExperience: number | undefined

  @Column({type:'integer'})
  familySize: number | undefined
  
}
