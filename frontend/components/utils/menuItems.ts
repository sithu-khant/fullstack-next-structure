export const sidebarMenuItems = ({ handleTrash }: any) => {

  return [
    {
      label: 'Trash',
      icon: 'pi pi-trash',
      command: () => {
        handleTrash();
      }
    },
    {
      label: 'Account',
      icon: 'pi pi-user',
      command: () => {
        handleTrash();
      }
    },
    {
      label: 'Support',
      icon: 'pi pi-info-circle',
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
