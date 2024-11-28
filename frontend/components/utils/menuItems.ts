export const sidebarMenuItems = ({ handleTableView, handleTrash }: any) => {

  return [
    {
      label: 'Table View',
      icon: 'pi pi-table',
      command: () => {
        handleTableView();
      }
    },
    {
      label: 'Trash',
      icon: 'pi pi-trash',
      command: () => {
        handleTrash();
      }
    }
  ]
}
