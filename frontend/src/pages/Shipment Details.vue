<template>
  <div>
    <div :class="['head-layout', { collapsed: isSidebarCollapsed }]">
      <div class="head-content">
        <header class="border-b bg-white h-12 py-2.5 pb-[2.625rem] sm:px-5 mb-12">
          <Breadcrumbs :items="breadcrumbsList" class="float-left" />
        </header>
      </div>
    </div>
    <div :class="['layout', { collapsed: isSidebarCollapsed }]">
      <LeftSidebar :isCollapsed="isSidebarCollapsed" @toggle="toggleSidebar" />
      <div class="main-content  p-5" style="padding-left: 150px; padding-right: 150px;">

        <div class="hai border rounded">
          <div class=" px-5  flex border-b h-12 items-center justify-between">
           
            <h1 class="text-2xl font-bold text-blue-600">
              {{ customerName }}
            </h1>

            
            <div class="badge">
              <Badge :variant="'subtle'" :theme="getTheme(inputValue)" size="sm" label="Badge">
                {{ inputValue }}
              </Badge>
            </div>
          </div>

          <div class="main flex flex-row gap-6 pt-5">
            
            <div class="w-1/2 p-2 min-h-70">
              <div
                class="text-gray-700 mb-5 ml-1 flex h-7 max-w-fit cursor-pointer items-center gap-2 pl-2 pr-3 text-base font-semibold leading-5">
                Details
              </div>
              <div class="flex items-center  px-3 leading-5 first:mt-1 pb-1">
                <div class="sm:w-36 shrink-0 text-sm text-gray-600 text-left">
                  Customer Name:
                </div>
                <div class="grid min-h-[18px] flex-1 items-center text-base text-center">
                  {{ customerName }}
                </div>
              </div>
              <div class="flex items-center gap-2 px-3 leading-5 first:mt-3 text-center mt-3 pb-1">
                <div class="sm:w-36 shrink-0 text-sm text-gray-600 text-left">
                  Project:
                </div>
                <div class="grid min-h-[18px] flex-1 items-center overflow-hidden text-base text-center">
                  {{ projectValue }}
                </div>
              </div>
              <div class="flex items-center gap-2 px-3 leading-5 first:mt-3 text-center mt-3 pb-1">
                <div class="sm:w-36 shrink-0 text-sm text-gray-600 text-left">
                  Date:
                </div>
                <div class="grid min-h-[18px] flex-1 items-center overflow-hidden text-base text-center">
                  {{ dateValue }}
                </div>
              </div>              
            </div>

            
            <div class="w-1/2 p-2 min-h-70">
              <div
                class="text-gray-700 mb-5 ml-1 flex h-7 max-w-fit cursor-pointer items-center gap-4 pl-2 pr-3 text-base font-semibold leading-5">
                Address & Contact
              </div>

              <div class="flex flex-col gap-2">
             
                <div class="flex items-start gap-2 px-3 leading-5 first:mt-1 pb-1">
                  <div class="sm:w-20 shrink-0 text-sm text-gray-600 text-left">
                    Address:
                  </div>
                  <div class="grid min-h-[18px] flex-1 items-center text-base text-left">
                    <div class="text-sm text-gray-900">
                      <span v-if="addressLine1"> {{ addressLine1 }}</span>
                      <span v-if="addressLine2">{{ addressLine2 }}</span>
                      <span v-if="city">{{ city }},</span>
                      <span v-if="state">{{ state }},</span>
                      <span v-if="country">{{ country }}</span>
                      <span v-if="pincode">- {{ pincode }}</span> 
                    </div>
                  </div>
                </div>

               
                <div class="flex items-center gap-2 px-3 leading-5 first:mt-3 text-center mt-3 pb-1">
                  <div class="sm:w-20 shrink-0 text-sm text-gray-600 text-left">
                    Contact:
                  </div>
                  <div class="grid min-h-[18px] flex-1 items-center overflow-hidden text-base text-left">
                    <div class="text-sm text-gray-900">
                      {{ phone }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




          <div class="bg-white  mt-6">
            <div
              class="text-gray-700 mb-2 ml-5 flex h-7 max-w-fit cursor-pointer items-center gap-2 pr-3 text-base font-semibold leading-5">
              Items
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6"></div>
            <table class="min-w-full border-b">
              <thead class="bg-gray-200">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rate(INR)
                  </th>
                  <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount(INR)
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr v-for="(row, index) in itemValue" :key="index">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {{ row.item_name }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {{ row.qty }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                    {{ row.rate }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                    {{ row.amount }}
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" colspan="3">
                    Item Total
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
                    {{ totalValue }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>



          <div class="main flex flex-row">
            <div class="w-3/5 flex flex-col pr-4" style="max-height: 400px; overflow-y: auto;"></div>


            
            <div class="w-2/5 flex flex-col">
              <table class="min-w-full border-l border-gray-200">
                <tbody class="bg-white">
                 
                  <tr>
                    <td class="px-6 py-4 text-sm font-medium text-left border-b border-gray-200">Total Taxes and Charges
                    </td>
                    <td class="px-6 py-4 text-sm font-medium text-right border-b border-gray-200">{{ totalTaxValue }}
                    </td>
                  </tr>
              
                  <tr>
                    <td class="px-6 py-4 text-sm font-medium text-left border-b border-gray-200">Grand Total</td>
                    <td class="px-6 py-4 text-sm font-medium text-right border-b border-gray-200">{{ grandValue }}</td>
                  </tr>
                 
                  <tr>
                    <td class="px-6 py-4 text-sm font-medium text-left border-b border-gray-200">In Words</td>
                    <td class="px-6 py-4 text-sm font-medium text-right border-b border-gray-200">{{ inWord }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="items">
            <div class=" flex flex-col" style="max-height: 400px; overflow-y: auto;">
              <div
                class="text-gray-700  p-5 flex h-7 max-w-fit cursor-pointer items-center gap-2 pr-3 text-base font-semibold leading-5">
                Taxes
              </div>
              <table class="min-w-full border-t border-gray-200">
                <thead>
                  <tr>
                    <th class="w-1/4 px-4 py-2 text-sm font-medium text-gray-500 text-left border-b border-gray-200">
                      Type</th>
                    <th class="w-1/4 px-4 py-2 text-sm font-medium text-gray-500 text-left border-b border-gray-200">
                      Account Head</th>
                    <th class="w-1/4 px-4 py-2 text-sm font-medium text-gray-500 text-left border-b border-gray-200">Tax
                      Rate</th>
                    <th class="w-1/4 px-4 py-2 text-sm font-medium text-gray-500 text-left border-b border-gray-200">
                      Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(tax, index) in taxValue" :key="index">
                    <td class="px-4 py-2 text-sm text-gray-900"
                      :class="{ 'border-b border-gray-200': index < taxValue.length - 1 }">{{ tax.charge_type }}</td>
                    <td class="px-4 py-2 text-sm text-gray-500"
                      :class="{ 'border-b border-gray-200': index < taxValue.length - 1 }">{{ tax.account_head }}</td>
                    <td class="px-4 py-2 text-sm text-gray-500"
                      :class="{ 'border-b border-gray-200': index < taxValue.length - 1 }">{{ tax.rate }}%</td>
                    <td class="px-4 py-2 text-sm font-medium text-gray-900"
                      :class="{ 'border-b border-gray-200': index < taxValue.length - 1 }">{{ tax.tax_amount }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="mt-8">&nbsp;</div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSidebar from '@/components/Custom Layout/LeftSidebar.vue'
import { ref, watch, onMounted, computed } from 'vue'
import { createResource, Breadcrumbs, Button, Badge } from 'frappe-ui'
import { useRouter, useRoute } from 'vue-router'

export default {
  components: {
    LeftSidebar,
    Breadcrumbs,
    Button,
    Badge,
  },
  setup() {
    const router = useRouter()
    const route = useRoute()

    const isSidebarCollapsed = ref(false)
    const name = ref('')
    const addressLine1 = ref([])
    const addressLine2 = ref([])
    const inputValue = ref('')
    const projectValue = ref([])
    const itemValue = ref([])
    const taxValue = ref([])
    const totalValue = ref([])
    const grandValue = ref([])
    const totalTaxValue = ref([])
    const dateValue = ref([])
    const customerName = ref([])
    const city = ref([])
    const country = ref([])
    const phone = ref([])
    const state = ref([])
    const pincode = ref([])
    const inWord = ref([])
    const duedateValue = ref([])
    const quotationTo = ref([])
    const delivery = createResource({
      url: 'v1portal.v1portal.api.api.get_shipments',
      method: 'get',
    })

    const breadcrumbsList = ref([
      { label: 'Shipments', route: { name: 'shipments' } },
      { label: '', route: {} },
    ])

    const fetchInvoiceDetails = async () => {
      try {
        const id = route.params.id
        const data = await delivery.fetch()      
        const InvoiceDetails = data.find((item) => item.name === id)

        if (InvoiceDetails) {
          name.value = InvoiceDetails.name
          inputValue.value = InvoiceDetails.status
          itemValue.value = InvoiceDetails.items || []
          projectValue.value = InvoiceDetails.project
          taxValue.value = InvoiceDetails.taxes || []
          grandValue.value = InvoiceDetails.rounded_total
          addressLine1.value = InvoiceDetails.address_line1
          addressLine2.value = InvoiceDetails.address_line2
          city.value = InvoiceDetails.city
          country.value = InvoiceDetails.country
          phone.value = InvoiceDetails.phone_no
          state.value = InvoiceDetails.state
          pincode.value = InvoiceDetails.pincode
          inWord.value = InvoiceDetails.in_words
          totalValue.value = InvoiceDetails.total
          totalTaxValue.value = InvoiceDetails.total_taxes_and_charges
          quotationTo.value = InvoiceDetails.quotation_to
          customerName.value = InvoiceDetails.customer
          dateValue.value = InvoiceDetails.posting_date
          duedateValue.value = InvoiceDetails.due_date
        }
      } catch (error) {
        console.error('Error fetching delivery details:', error)
      }
    }

    const toggleSidebar = () => {
      isSidebarCollapsed.value = !isSidebarCollapsed.value
    }

    watch(name, (newName) => {
      breadcrumbsList.value[1].label = newName
    })

    onMounted(() => {
      fetchInvoiceDetails()
    })

    const getTheme = (inputValue) => {
      if (inputValue === 'Cancelled') {
        return 'green';
      } else if (inputValue === 'Completed') {
        return 'blue';
      } else if (inputValue === 'Draft') {
        return 'red';
      } else if (inputValue === 'Closed') {
        return 'orange';
      } else {
        return 'gray';
      }
    }


    return {
      isSidebarCollapsed,
      name,
      inWord,
      inputValue,
      addressLine1,
      itemValue,
      taxValue,
      customerName,
      totalValue,
      dateValue,
      quotationTo,
      totalTaxValue,
      grandValue,
      toggleSidebar,
      projectValue,
      breadcrumbsList,
      duedateValue,
      addressLine2,
      city,
      country,
      phone,
      state,
      pincode,
      getTheme,
    }
  },
}
</script>

<style scoped>
.head-layout {
  display: flex;
  width: 100%;
  transition: margin-left 0.3s ease;
}

.layout {
  display: flex;
  width: 100%;
  height: 100vh;
  transition: margin-left 0.3s ease;
}

.main-content {
  flex-grow: 1;
  padding: 1.25rem;
  transition: margin-left 0.3s ease;
  margin-left: 220px;  
}

.head-content {
  flex-grow: 1;
  padding: 0px;
  transition: margin-left 0.3s ease;
  margin-left: 220px;
 
}

.collapsed .main-content {
  margin-left: 60px;

}

.collapsed .head-content {
  margin-left: 60px;
 
}
</style>
