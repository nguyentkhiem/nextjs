import apiServices from './api'

const DashboardServices = {
  getListTodos() {
    return apiServices.get('/todos')
  },
}

export default DashboardServices
