export const categorySidebarItems = [
  {
    label: 'Sort',
    icon: 'pi pi-sort',
    items: [
      {
        label: 'A to Z',
        icon: 'pi pi-sort-alpha-down',
      },
      {
        label: 'Z to A',
        icon: 'pi pi-sort-alpha-down-alt',
      }
    ]
  },
  {
    label: 'Table View',
    icon: 'pi pi-table',
    command: () => {
      console.log("Hello");
    }
  }
];

export const categoryCardItems = [
  {
    label: 'Favorite',
    icon: 'pi pi-star',
    command: () => {
      console.log("Hello");
    }
  },
  {
    label: 'Rename',
    icon: 'pi pi-pencil',
    command: () => {
      console.log("Hello");
    }
  },
  {
    label: 'Table View',
    icon: 'pi pi-table',
    command: () => {
      console.log("Hello");
    }
  },
  {
    label: 'Delete',
    icon: 'pi pi-trash',
    command: () => {
      console.log("Hello");
    }
  }
];
