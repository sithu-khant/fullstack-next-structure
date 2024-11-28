export const handleSortItems = ({ handleTableView }: any) => {

  return [
    {
      label: 'Personal',
      command: () => {
        handleTableView();
      }
    },
    {
      label: 'Family',
      command: () => {
        handleTableView();
      }
    },
    {
      label: 'Work',
      command: () => {
        handleTableView();
      }
    },
    {
      label: 'Others',
      command: () => {
        handleTableView();
      }
    }
  ]
}
