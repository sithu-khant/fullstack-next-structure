export const handleSortItems = ({ handleTableView }: any) => {

  return [
    {
      label: 'Table View',
      // icon: 'pi pi-table',
      command: () => {
        handleTableView();
      }
    }
  ]
}
