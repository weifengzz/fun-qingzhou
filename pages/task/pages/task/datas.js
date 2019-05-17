const TASK_DATAS = [
  {
    id: '1',
    type: '3',
    scenic_type: '风景名胜',
    title: '如梦令',
    author: null,
    content: '常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。争渡，争渡，惊起一滩鸥鹭',
    poster_img: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D640%2C360%2C0/sign=0d432a47aec27d1ea57368847de89b5a/cf1b9d16fdfaaf512aa2195c865494eef11f7a94.jpg',
    video_url: 'https://vdse.bdstatic.com//7e20d2b93e339acdfcbe21b0672e5852?authorization=bce-auth-v1/fb297a5cc0fb434c971b8fa103e8dd7b/2017-05-11T09:02:31Z/-1//5184546436d960028ec0d69728eae1a1299779cb7f17037a1f33d3f2fb228c29',
    img: '',
    finish: false
  },
  {
    id: '2',
    type: '2',
    title: '青州市博物馆',
    scenic_type: '文化古迹',
    author: null,
    content: '常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。争渡，争渡，惊起一滩鸥鹭',
    poster_img: '',
    video_url: '',
    img: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D640%2C360%2C0/sign=076b7b261cce36d3a251d0705cce0cb3/a08b87d6277f9e2f5bd69af41630e924b999f36f.jpg',
    finish: true
  },
  {
    id: '3',
    type: '1',
    title: '游广福寺',
    scenic_type: '文化古迹',
    author: {
      name: '胡志康',
      year: '宋朝'
    },
    content: '兰若幽深与世违，酒兰重觅未斜晖。篮舆绕入花边路，布衲趋迎竹下扉。清籁敲风和梵奏，独槐笼榻涨烟霏。吟栏倚遍诗成处，不觉金莲映月辉。',
    poster_img: '',
    video_url: '',
    img: [],
    finish: false
  }, {
    id: '4',
    type: '3',
    title: '如梦令',
    author: null,
    content: '常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。争渡，争渡，惊起一滩鸥鹭',
    poster_img: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D640%2C360%2C0/sign=0d432a47aec27d1ea57368847de89b5a/cf1b9d16fdfaaf512aa2195c865494eef11f7a94.jpg',
    video_url: 'https://vdse.bdstatic.com//7e20d2b93e339acdfcbe21b0672e5852?authorization=bce-auth-v1/fb297a5cc0fb434c971b8fa103e8dd7b/2017-05-11T09:02:31Z/-1//5184546436d960028ec0d69728eae1a1299779cb7f17037a1f33d3f2fb228c29',
    img: '',
    finish: false
  },
  {
    id: '5',
    type: '2',
    title: '青州市博物馆',
    author: null,
    content: '常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。争渡，争渡，惊起一滩鸥鹭',
    poster_img: '',
    video_url: '',
    img: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D640%2C360%2C0/sign=076b7b261cce36d3a251d0705cce0cb3/a08b87d6277f9e2f5bd69af41630e924b999f36f.jpg',
    finish: true
  },
  {
    id: '6',
    type: '1',
    title: '游广福寺',
    author: {
      name: '胡志康',
      year: '宋朝'
    },
    content: '兰若幽深与世违，酒兰重觅未斜晖。篮舆绕入花边路，布衲趋迎竹下扉。清籁敲风和梵奏，独槐笼榻涨烟霏。吟栏倚遍诗成处，不觉金莲映月辉。',
    poster_img: '',
    video_url: '',
    img: [],
    finish: false
  }, {
    id: '7',
    type: '3',
    title: '如梦令',
    author: null,
    content: '常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。争渡，争渡，惊起一滩鸥鹭',
    poster_img: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D640%2C360%2C0/sign=0d432a47aec27d1ea57368847de89b5a/cf1b9d16fdfaaf512aa2195c865494eef11f7a94.jpg',
    video_url: 'https://vdse.bdstatic.com//7e20d2b93e339acdfcbe21b0672e5852?authorization=bce-auth-v1/fb297a5cc0fb434c971b8fa103e8dd7b/2017-05-11T09:02:31Z/-1//5184546436d960028ec0d69728eae1a1299779cb7f17037a1f33d3f2fb228c29',
    img: '',
    finish: false
  },
  {
    id: '8',
    type: '2',
    title: '青州市博物馆',
    author: null,
    content: '常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。争渡，争渡，惊起一滩鸥鹭',
    poster_img: '',
    video_url: '',
    img: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D640%2C360%2C0/sign=076b7b261cce36d3a251d0705cce0cb3/a08b87d6277f9e2f5bd69af41630e924b999f36f.jpg',
    finish: true
  },
  {
    id: '9',
    type: '1',
    title: '游广福寺',
    author: {
      name: '胡志康',
      year: '宋朝'
    },
    content: '兰若幽深与世违，酒兰重觅未斜晖。篮舆绕入花边路，布衲趋迎竹下扉。清籁敲风和梵奏，独槐笼榻涨烟霏。吟栏倚遍诗成处，不觉金莲映月辉。',
    poster_img: '',
    video_url: '',
    img: [],
    finish: false
  },
]

module.exports = {
  taskDatas: TASK_DATAS
}
