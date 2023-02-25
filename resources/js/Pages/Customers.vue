<script setup>
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import CustomerService from '../services/CustomerService';
import { ref, onBeforeMount } from 'vue';
import { useLayout } from '../Layouts/composables/layout';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';

const { contextPath } = useLayout();

const customer1 = ref(null);
const customer2 = ref(null);
const customer3 = ref(null);
const filters1 = ref(null);
const loading1 = ref(null);
const loading2 = ref(null);
const idFrozen = ref(false);
const expandedRows = ref([]);
const representatives = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' }
]);

const customerService = new CustomerService();

onBeforeMount(() => {
    customerService.getCustomersLarge().then((data) => {
        customer1.value = data;
        loading1.value = false;
        customer1.value.forEach((customer) => (customer.date = new Date(customer.date)));
    });
    customerService.getCustomersLarge().then((data) => (customer2.value = data));
    customerService.getCustomersMedium().then((data) => {customer3.value = data; console.log(customer3.value)});


    loading2.value = false;

    initFilters1();
});

const initFilters1 = () => {
    filters1.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        company: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        activity: { value: [0, 50], matchMode: FilterMatchMode.BETWEEN },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    };
};

const clearFilter1 = () => {
    initFilters1();
};

const formatCurrency = (value) => {
    return value.toLocaleString('eu', { style: 'currency', currency: 'EUR' });
};

const formatDate = (value) => {
  return new Date(value).toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};


</script>

<script>
export default {
  data() {
    return {
      filterModel:{value: null},
      userArr: {
        data: [

        ]
      },
    }
  },
  props: {
    users: String
  },
  mounted() {
    console.log(Object.values(this.users)[0]);
    for(let i = 0; i < this.users.length; i++) {
      this.userArr.data.push(Object.values( this.users)[i]);
    }
    console.log(this.userArr.data);
  },
}

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Subheader Grouping</h5>
                <DataTable
                  :value="userArr.data"
                  rowGroupMode="subheader"
                  :groupRowsBy="userArr.createdAt"
                  sortMode="single"
                  :sortOrder="1"
                  scrollable
                  scrollHeight="60rem"
                  :paginator="true"
                  class="p-datatable-gridlines"
                  :rows="10"
                  :rowHover="true"
                  responsiveLayout="scroll"
                >
                    <Column field="surname" header="Name" style="min-width: 200px">
                      <template #body="{ data }">
                        {{ data.firstname }} {{ data.surname }}
                      </template>
                    </Column>
                  <Column field="email" header="E-Mail" style="min-width: 200px">
                    <template #body="{data}">
                      {{data.email}}
                    </template>
                  </Column>
                  <Column field="role_id" header="Role" style="min-width: 200px">
                    <template #body="{data}">
                      <span v-if="data.role_id === 1">
                        Admin
                      </span>
                      <span v-else>
                        Customer
                      </span>
                    </template>
                  </Column>
                  <Column field="created_at" header="Created At" style="min-width: 200px">
                    <template #body="{data}">
                      {{formatDate(data.created_at)}}
                    </template>
                  </Column>
                    <template #groupfooter="slotProps">
                        <td style="text-align: right" class="text-bold pr-6">Total Customers: {{ userArr.data.length }}</td>
                    </template>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>
