<script setup>
import { useLayout } from '../Layouts/composables/layout';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const { contextPath } = useLayout();

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
  },
  methods: {
    onDeleteClick(id, role_id) {
      console.log(id);
      if(role_id !== 2) {
        this.$inertia.delete('/users/' + id);
      }

    },
    onCreateClick() {
      const tempUser = this.userArr.data[0];
      tempUser.id = 2;
      this.$inertia.post('/users/create', {tempUser});
    },
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
                  :groupRowsBy="userArr.created_at"
                  sortMode="single"
                  :sortOrder="1"
                  scrollable
                  scrollHeight="60rem"
                  :paginator="true"
                  class="p-datatable-gridlines"
                  :rows="10"
                  :rowHover="true"
                  responsiveLayout="scroll"
                  :filter="filters1"
                  :globalFilterFields="['surname','email','role_id','created_at']"
                >
                    <Column field="surname" header="Name" style="min-width: 200px">
                      <template #body="{ data }">
                        {{ data.firstname }} {{ data.surname }}
                      </template>
                      <template #filter="{filterModel}">
                        <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by surname"/>
                      </template>
                    </Column>
                  <Column field="email" header="E-Mail" style="min-width: 200px">
                    <template #body="{data}">
                      {{data.email}}
                    </template>
                  </Column>
                  <Column field="role_id" header="Role" style="min-width: 200px">
                    <template #body="{data}">
                      <span v-if="data.role_id === 2">
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
                  <Column header="Actions" style="min-width: 150px">
                    <template #body="{data}">
                      <Button style="margin-right: 10px" icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="onDeleteClick(data.id, data.role_id)"></Button>
                      <Button icon="pi pi-pencil" class="p-button-rounded p-button-warning"></Button>
                    </template>
                  </Column>
                    <template #groupfooter="slotProps">
                        <td style="text-align: right" class="text-bold pr-6">
                          Total Customers: {{ userArr.data.length }}
                          <Button style="margin-left:auto" icon="pi pi-plus" class="p-button-rounded p-button-success" @click="onCreateClick()"></Button>
                        </td>

                    </template>
                </DataTable>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>
