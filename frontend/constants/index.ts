export const sidebarItems = ({ handleTableView, handleTrash }: any) => {

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

export const sortItems = ({ handleSort }: any) => {
  return [
    {
      label: 'Favorite',
      icon: 'pi pi-star',
      command: () => {
        handleSort();
      }
    }
  ];
}