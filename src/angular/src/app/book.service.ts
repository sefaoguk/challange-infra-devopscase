import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


export interface IBookInformation {
  img: string;
  id: number;
  name: string;
  author: string;
  printingDate: any;
  newprice: number;
  oldprice: number;
  publisherHouse: string;
  description: string;
  new?:string;
  nameDescription?:string;
}

@Injectable({
  providedIn: 'root'
})


export class BookService {
  constructor(private _route: ActivatedRoute, private _router: Router) { }
  book: IBookInformation[] = [
    {
      img: 'https://i.dr.com.tr/cache/500x400-0/originals/0000000571265-1.jpg',
      id: 1,
      new:"Çok Satanlar",
      name: "Kılıç",
      nameDescription:"(Halid Bin Velid)",
      author: "Ömer Murat Demirtaş",
      printingDate: "02/04/1960",
      newprice: 30,
      oldprice: 38,
      publisherHouse: "Babil Yayınları",
      description: "İslâmın devletleşme sürecindeki ilk başkomutanı ünvanını taşıyan Halid Bin Velid; hayatı boyunca girdiği hiçbir savaşı kaybetmeyen ender kumandanlardan biridir. Mute savaşında kimi kaynaklarda otuz bin, kimi kaynaklarda yüz bin kişilik Bizans ordusunu iki bin kişilik bir seriyye ile dağıtabilmesi ve geri püskürtebilmesiyle ilk kez batılı tarih kaynaklarında adından söz ettirmiştir ve bu son da olmamıştır. Dönemin büyük gücü Sasani İmparatorluğunu çökerten kumandan; Şam, Humus, Anbar, Busra, Fihl fatihi; Yermük Meydan muharebesinin galip kumandanı; onun ünvanlarından birkaç tanesidir. İslâm tarihinde en çok bahsi geçen yönü Uhud savaşında galip gelerek Hz. Peygamber'in ordularına karşı sonuç alabilmiş tek kumandan olma özelliğidir. Müslüman olmadan önceki dönemde araplar arasında ünvanı Kılıç olan Halid bin Velid'i önemli kılan asıl olay, Mute zaferinden sonra Hz. Peygamber tarafından kendisine verilen (Seyfullah) Allahın Kılıcı ünvanıdır.İslâm'ın doğduğu yıllarda Ortadoğu ve Arap dünyasının içinde bulunduğu sosyal durumu Halid Bin Velid'in hayatı üzerinden vurgulamaya çalışarak, adını tarihe altın harflerle yazdırmış olan bu büyük insanın askeri, siyasi ve stratejik zekası roman tarzında anlatılmaktadır."
    },
    {
      img: 'https://i.idefix.com/cache/600x600-0/originals/0000000261563-1.jpg',
      id: 1,
      name: "Çocukluğum",
      author: "Maxim Gorki",
      printingDate: "02/04/1960",
      newprice: 25,
      oldprice: 32,
      publisherHouse: "İlva Yayınları",
      description: "Maxim Gorki'nin Rusya'daki çocukluk anılarını anlatan eser, yaşanılan dönemin zorluklarını özenle işleyerek gözler önüne sermektedir. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır.5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır. 5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır."
    },
    {
      img: 'https://kbimages1-a.akamaihd.net/011101df-96e2-4511-aaa0-2f07fca51202/1200/1200/False/vadideki-zambak.jpg',
      id: 2,
      name: "Vadideki Zambak",
      author: "Balzac",
      printingDate: "02/04/1970",
      newprice: 30,
      oldprice: 35,
      publisherHouse: 'Sis Yayınları',
      description: "5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır.5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır. 5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır. 5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır. 5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır.  "
    },
    
    {
      img: "https://i.dr.com.tr/cache/500x400-0/originals/0001794356001-1.jpg",
      id: 3,
      name: "Genç Wertherin Acıları",
      author: "Gothe",
      printingDate: "02/04/1950",
      newprice: 27,
      oldprice: 34,
      publisherHouse: 'Ayrıntı Yayınları',
      description: "5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır. 5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır. 5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır. 5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır. 5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır. "
    },
    {
      img: 'https://i.dr.com.tr/cache/500x400-0/originals/0000000571265-1.jpg',
      id: 1,
      new:"Çok Satanlar",
      nameDescription:"(Halid Bin Velid)",
      name: "Kılıç",
      author: "Ömer Murat Demirtaş",
      printingDate: "02/04/1960",
      newprice: 30,
      oldprice: 38,
      publisherHouse: "Babil Yayınları",
      description: "İslâmın devletleşme sürecindeki ilk başkomutanı ünvanını taşıyan Halid Bin Velid; hayatı boyunca girdiği hiçbir savaşı kaybetmeyen ender kumandanlardan biridir. Mute savaşında kimi kaynaklarda otuz bin, kimi kaynaklarda yüz bin kişilik Bizans ordusunu iki bin kişilik bir seriyye ile dağıtabilmesi ve geri püskürtebilmesiyle ilk kez batılı tarih kaynaklarında adından söz ettirmiştir ve bu son da olmamıştır. Dönemin büyük gücü Sasani İmparatorluğunu çökerten kumandan; Şam, Humus, Anbar, Busra, Fihl fatihi; Yermük Meydan muharebesinin galip kumandanı; onun ünvanlarından birkaç tanesidir. İslâm tarihinde en çok bahsi geçen yönü Uhud savaşında galip gelerek Hz. Peygamber'in ordularına karşı sonuç alabilmiş tek kumandan olma özelliğidir. Müslüman olmadan önceki dönemde araplar arasında ünvanı Kılıç olan Halid bin Velid'i önemli kılan asıl olay, Mute zaferinden sonra Hz. Peygamber tarafından kendisine verilen (Seyfullah) Allahın Kılıcı ünvanıdır.İslâm'ın doğduğu yıllarda Ortadoğu ve Arap dünyasının içinde bulunduğu sosyal durumu Halid Bin Velid'in hayatı üzerinden vurgulamaya çalışarak, adını tarihe altın harflerle yazdırmış olan bu büyük insanın askeri, siyasi ve stratejik zekası roman tarzında anlatılmaktadır."
    },
    {
      img: "https://i.dr.com.tr/cache/600x600-0/originals/0000000385838-1.jpg",
      id: 4,
      name: "Akıl Oyunlarının Gölgesinde",
      author: "Sir Arthur Conan",
      printingDate: "02/04/1990",
      newprice: 30,
      oldprice: 36,
      publisherHouse: 'Martı Yayınları',
      description: "İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar. "
    },
    {
      img: "https://i.dr.com.tr/cache/600x600-0/originals/0000000385838-1.jpg",
      id: 5,
      name: "Akıl Oyunlarının Gölgesinde",
      author: "Sir Arthur Conan",
      printingDate: "02/04/1990",
      newprice: 30,
      oldprice: 38,
      publisherHouse: 'Martı Yayınları',
      description: "İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar. "
    },
    {
      img: 'https://i.idefix.com/cache/600x600-0/originals/0000000261563-1.jpg',
      id: 6,
      name: "Çocukluğum",
      author: "Maxim Gorki",
      printingDate: "02/04/1960",
      newprice: 25,
      oldprice: 32,
      publisherHouse: "İlva Yayınları",
      description: "Maxim Gorki'nin Rusya'daki çocukluk anılarını anlatan eser, yaşanılan dönemin zorluklarını özenle işleyerek gözler önüne sermektedir.Maxim Gorki'nin Rusya'daki çocukluk anılarını anlatan eser, yaşanılan dönemin zorluklarını özenle işleyerek gözler önüne sermektedir.Maxim Gorki'nin Rusya'daki çocukluk anılarını anlatan eser, yaşanılan dönemin zorluklarını özenle işleyerek gözler önüne sermektedir.Maxim Gorki'nin Rusya'daki çocukluk anılarını anlatan eser, yaşanılan dönemin zorluklarını özenle işleyerek gözler önüne sermektedir.Maxim Gorki'nin Rusya'daki çocukluk anılarını anlatan eser, yaşanılan dönemin zorluklarını özenle işleyerek gözler önüne sermektedir.Maxim Gorki'nin Rusya'daki çocukluk anılarını anlatan eser, yaşanılan dönemin zorluklarını özenle işleyerek gözler önüne sermektedir.Maxim Gorki'nin Rusya'daki çocukluk anılarını anlatan eser, yaşanılan dönemin zorluklarını özenle işleyerek gözler önüne sermektedir.Maxim Gorki'nin Rusya'daki çocukluk anılarını anlatan eser, yaşanılan dönemin zorluklarını özenle işleyerek gözler önüne sermektedir. "
    },
    {
      img: 'https://i.dr.com.tr/cache/500x400-0/originals/0000000571265-1.jpg',
      id: 1,
      new:"Çok Satanlar",
      name: "Kılıç",
      nameDescription:"(Halid Bin Velid)",
      author: "Ömer Murat Demirtaş",
      printingDate: "02/04/1960",
      newprice: 30,
      oldprice: 38,
      publisherHouse: "Babil Yayınları",
      description: "İslâmın devletleşme sürecindeki ilk başkomutanı ünvanını taşıyan Halid Bin Velid; hayatı boyunca girdiği hiçbir savaşı kaybetmeyen ender kumandanlardan biridir. Mute savaşında kimi kaynaklarda otuz bin, kimi kaynaklarda yüz bin kişilik Bizans ordusunu iki bin kişilik bir seriyye ile dağıtabilmesi ve geri püskürtebilmesiyle ilk kez batılı tarih kaynaklarında adından söz ettirmiştir ve bu son da olmamıştır. Dönemin büyük gücü Sasani İmparatorluğunu çökerten kumandan; Şam, Humus, Anbar, Busra, Fihl fatihi; Yermük Meydan muharebesinin galip kumandanı; onun ünvanlarından birkaç tanesidir. İslâm tarihinde en çok bahsi geçen yönü Uhud savaşında galip gelerek Hz. Peygamber'in ordularına karşı sonuç alabilmiş tek kumandan olma özelliğidir. Müslüman olmadan önceki dönemde araplar arasında ünvanı Kılıç olan Halid bin Velid'i önemli kılan asıl olay, Mute zaferinden sonra Hz. Peygamber tarafından kendisine verilen (Seyfullah) Allahın Kılıcı ünvanıdır.İslâm'ın doğduğu yıllarda Ortadoğu ve Arap dünyasının içinde bulunduğu sosyal durumu Halid Bin Velid'in hayatı üzerinden vurgulamaya çalışarak, adını tarihe altın harflerle yazdırmış olan bu büyük insanın askeri, siyasi ve stratejik zekası roman tarzında anlatılmaktadır."
    },
    {
      img: 'https://kbimages1-a.akamaihd.net/011101df-96e2-4511-aaa0-2f07fca51202/1200/1200/False/vadideki-zambak.jpg',
      id: 7,
      name: "Vadideki Zambak",
      author: "Balzac",
      printingDate: "02/04/1970",
      newprice: 30,
      oldprice: 35,
      publisherHouse: 'Sis Yayınları',
      description: "5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar. "
    },
    {
      img: "https://i.dr.com.tr/cache/500x400-0/originals/0001794356001-1.jpg",
      id: 8,
      name: "Genç Wertherin Acıları",
      author: "Gothe",
      printingDate: "02/04/1950",
      newprice: 27,
      oldprice: 34,
      publisherHouse: 'Ayrıntı Yayınları',
      description: "5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır. İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar."
    },
    {
      img: "https://i.dr.com.tr/cache/600x600-0/originals/0000000385838-1.jpg",
      id: 9,
      name: "Akıl Oyunlarının Gölgesinde",
      author: "Sir Arthur Conan",
      printingDate: "02/04/1990",
      newprice: 30,
      oldprice: 36,
      publisherHouse: 'Martı Yayınları',
      description: "İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar. "
    },
    {
      img: "https://i.dr.com.tr/cache/600x600-0/originals/0000000385838-1.jpg",
      id: 10,
      name: "Akıl Oyunlarının Gölgesinde",
      author: "Sir Arthur Conan",
      printingDate: "02/04/1990",
      newprice: 30,
      oldprice: 38,
      publisherHouse: 'Martı Yayınları',
      description: "İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar.İnsan beyninde çözülemeyecek kadar zor, tahmin edilemeyecek kadar karmaşık duygular ve arzular vardır. O arzuların karanlık olanlarına gelince; işte onlar oldukça soğuktur ve kişiyi adeta buzdan bir kütleye çevirir. Gözleri kör eden bu ürkütücü ruh halleri, insanın aklının ucundan bile geçiremeyeceği şeyleri yapmasını sağlar. "
    },
    {
    img: 'https://i.idefix.com/cache/600x600-0/originals/0000000261563-1.jpg',
    id: 1,
    name: "Çocukluğum",
    author: "Maxim Gorki",
    printingDate: "02/04/1960",
    newprice: 25,
    oldprice: 32,
    publisherHouse: "İlva Yayınları",
    description: "Maxim Gorki'nin Rusya'daki çocukluk anılarını anlatan eser, yaşanılan dönemin zorluklarını özenle işleyerek gözler önüne sermektedir. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır.5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır. 5 Kardeşli bir ablanın, anne ve babalarını kaybetmeleri ile beraberinde getirdiği zorlukları anlatan eser eşsiz bir aşk hikayesine dönüşmeye başlar. Dönemin edebiyatına damga vurmuş bu klasik, size aşk ve sefaletin bambaşka bir bakış boyutunu göstererek  eşsiz bir dünyanın kapılarını sizin için aralayacaktır."
  },
  {
    img: 'https://i.dr.com.tr/cache/500x400-0/originals/0000000571265-1.jpg',
    id: 1,
    new:"Çok Satanlar",
    name: "Kılıç",
    nameDescription:"(Halid Bin Velid)",
    author: "Ömer Murat Demirtaş",
    printingDate: "02/04/1960",
    newprice: 30,
    oldprice: 38,
    publisherHouse: "Babil Yayınları",
    description: "İslâmın devletleşme sürecindeki ilk başkomutanı ünvanını taşıyan Halid Bin Velid; hayatı boyunca girdiği hiçbir savaşı kaybetmeyen ender kumandanlardan biridir. Mute savaşında kimi kaynaklarda otuz bin, kimi kaynaklarda yüz bin kişilik Bizans ordusunu iki bin kişilik bir seriyye ile dağıtabilmesi ve geri püskürtebilmesiyle ilk kez batılı tarih kaynaklarında adından söz ettirmiştir ve bu son da olmamıştır. Dönemin büyük gücü Sasani İmparatorluğunu çökerten kumandan; Şam, Humus, Anbar, Busra, Fihl fatihi; Yermük Meydan muharebesinin galip kumandanı; onun ünvanlarından birkaç tanesidir. İslâm tarihinde en çok bahsi geçen yönü Uhud savaşında galip gelerek Hz. Peygamber'in ordularına karşı sonuç alabilmiş tek kumandan olma özelliğidir. Müslüman olmadan önceki dönemde araplar arasında ünvanı Kılıç olan Halid bin Velid'i önemli kılan asıl olay, Mute zaferinden sonra Hz. Peygamber tarafından kendisine verilen (Seyfullah) Allahın Kılıcı ünvanıdır.İslâm'ın doğduğu yıllarda Ortadoğu ve Arap dünyasının içinde bulunduğu sosyal durumu Halid Bin Velid'in hayatı üzerinden vurgulamaya çalışarak, adını tarihe altın harflerle yazdırmış olan bu büyük insanın askeri, siyasi ve stratejik zekası roman tarzında anlatılmaktadır."
  },
  ];


  ngOnInit(): void {
  }
}

