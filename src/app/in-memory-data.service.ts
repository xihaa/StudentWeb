import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let timus = [
      {id: '1', date: '2017-7-15 14:05:09', tigan: {
        string: '从前有一位小朋友有一天他走丢了..',
        img: 'assets/img/chi.png'
      }, explain: {
        string: '他走丢的原因竟然是...',
        img: 'assets/img/chi.png'
      }, zhishidian: '名词解释', cuoyin: '脑洞不够', rate: '4'
      },
      {id: '2', date: '2017-7-15 14:05:09', tigan: {
        string: '从前有一位小朋友有一天他走丢了..',
        img: 'assets/img/chi.png'
      }, explain: {
        string: '他走丢的原因竟然是...',
        img: 'assets/img/chi.png'
      }, zhishidian: '名词解释', cuoyin: '脑洞不够', rate: '4'
      },
      {id: '3', date: '2017-7-15 14:05:09', tigan: {
        string: '从前有一位小朋友有一天他走丢了..',
        img: 'assets/img/chi.png'
      }, explain: {
        string: '他走丢的原因竟然是...',
        img: 'assets/img/chi.png'
      }, zhishidian: '名词解释', cuoyin: '脑洞不够', rate: '4'
      }
    ];
    return {timus};
  }
}
