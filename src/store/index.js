import { reactive, ref } from 'vue'

export const store = reactive({
  school_year: {
    from_year: 2021,
    to_year: 2022
  },
  sy_fees: {
    id: null,
    fees: [],
    discount: []
  },

  school_year_id: 1,


  schoolYear: [],

  fees: [],
  syFees: [],
  filteredFees: [],

  discount: [],
  syDiscount: [],
  filteredDiscount: [],


  putSYId(payload) {
    this.sy_fees.id = payload
  },
  putSchoolYear(payload) {
    this.school_year.to_year = payload + 1
  },

  putFees(payload) {
    this.filteredFees.push(payload)
  },

  resetFees() {
    this.filteredFees.splice(0, this.fees.length)
  },

  putDiscount(payload) {
    this.filteredDiscount.push(payload)
  },

  resetDiscount() {
    this.filteredDiscount.splice(0, this.fees.length)
  },

  paymentDetails: {
    fees: [],
    discount: [],
    discount_value: 0,
  },
})