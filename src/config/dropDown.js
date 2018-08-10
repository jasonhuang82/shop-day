
export const filterDropConfig = {
  title: '分類',
  listData: [
    { title: '全部', value: '' },
    { title: '衣服', value: 'cloth' },
    { title: '杯子', value: 'cup' },
    { title: '背包', value: 'bag' },
    { title: '日用品', value: 'life' }
  ]
};

export const sortDropConfig = {
  title: '排序',
  listData: [
    { title: '價格從低到高', value: { key: 'price', sort: 'asc' } },
    { title: '價格從高到低', value: { key: 'price', sort: 'desc' } },
    { title: '最多折扣', value: { key: 'discount', sort: 'asc' } },
    { title: '人氣最多', value: { key: 'popular', sort: 'asc' } }
  ]
};