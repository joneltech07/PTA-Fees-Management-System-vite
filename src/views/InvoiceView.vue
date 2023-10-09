<script setup>
import { ref } from 'vue'
import Fees from '@/data/fees.json'
import Discount from '@/data/discount.json';
import PaidFees from '@/data/paid_fees'


const paidFees = ref(PaidFees)

</script>

<template>
    <div class="container mt-3">
        <div class="mb-3">Total: 0.00</div>

        <div class="fees">
            <div class="row">
                <div class="col">
                    <strong>Fees</strong>
                </div>
                <div class="col text-end">
                    <strong>Amount Paid</strong>
                </div>
            </div>
            <div class="row"
                v-for="pf in paidFees">
                <div class="col">{{ pf.fee_id }}</div>
                <div class="col">{{ pf.LRN }}</div>
                <div class="col text-end">0.00</div>
                <hr>
            </div>
        </div>

        <div class="discount mt-3">
            <div class="row">
                <div class="col">
                    <strong>Discount</strong>
                </div>
            </div>
            <div class="row"
                v-for="d in Discount">
                <div class="col">{{ d.text }}</div>
                <hr>
            </div>
        </div>
    </div>
</template>