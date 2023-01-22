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
    customerService.getCustomersMedium().then((data) => (customer3.value = data));
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

const calculateCustomerTotal = (name) => {
    let total = 0;
    if (customer3.value) {
        for (let customer of customer3.value) {
            if (customer.representative.name === name) {
                total++;
            }
        }
    }

    return total;
};
</script>

<script>
export default {
  data() {
    return {
      filterModel:{value: null}
    }
  }
}

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Subheader Grouping</h5>
                <DataTable
                  :value="customer3"
                  rowGroupMode="subheader"
                  groupRowsBy="representative.name"
                  sortMode="single"
                  sortField="representative.name"
                  :sortOrder="1"
                  scrollable
                  scrollHeight="60rem"

                  :paginator="true"
                  class="p-datatable-gridlines"
                  :rows="10"
                  :rowHover="true"
                  v-model:filters="filters1"
                  filterDisplay="menu"
                  :loading="loading1"
                  :filters="filters1"
                  responsiveLayout="scroll"
                  :globalFilterFields="['name', 'company', 'representative.name', 'date']"
                >
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="name" header="Name" style="min-width: 200px">
                      <template #body="{ data }">
                        {{ data.name }}
                      </template>
                      <template #filter="{ filterModel }">
                        <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name" />
                      </template>
                    </Column>
                    <Column field="company" header="Company" style="min-width: 200px"></Column>
                    <Column field="date" header="Date" style="min-width: 200px">
                      <template #body="{data}">
                        {{formatDate(data.date)}}
                      </template>
                      <template #filter="{filterModel}">
                        <Calendar v-model="filterModel.value" date-format="mm/dd/yy" placeholder="mm/dd/yyyy"></Calendar>
                      </template>
                    </Column>
                    <template #groupheader="slotProps">
                        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" width="32" style="vertical-align: middle" />
                        <span class="image-text font-bold ml-2">{{ slotProps.data.representative.name }}</span>
                    </template>
                    <template #groupfooter="slotProps">
                        <td style="text-align: right" class="text-bold pr-6">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</td>
                    </template>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>
