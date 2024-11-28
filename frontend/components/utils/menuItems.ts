export const sidebarMenuItems = ({ handleTableView, handleSearch, handleTrash }: any) => {

  return [
    {
      label: 'Table View',
      icon: 'pi pi-table',
      command: () => {
        handleTableView();
      }
    },
    {
      label: 'Search',
      icon: 'pi pi-search',
      command: () => {
        handleSearch();
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

export const itemMenuItems = ({ handleFavorite, handleDelete }: any) => {

  return [
    {
      label: 'Favorite',
      icon: 'pi pi-star',
      command: () => {
        handleFavorite();
      }
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
        handleDelete();
      }
    }
  ]
}
