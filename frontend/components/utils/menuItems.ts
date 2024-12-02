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
