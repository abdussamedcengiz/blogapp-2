# Blog Uygulamasi (Express + EJS + MySQL)

Node.js ogrenirken yazilan, EJS sablonlari ve MySQL kullanan blog denemesi.
`Node.js_Blogapp` deposunun devami: orada sayfalar duz HTML olarak
sunuluyordu, burada sablon motoru ve veritabani devreye giriyor.

## Durum: yarim kaldi

Depoyu acan biri yaniltici bir izlenim edinmesin diye acikca yaziliyor:

**Calisan kisim**
- MySQL baglantisi (`mysql2`, promise arayuzu)
- Kategorilerin veritabanindan cekilip listelenmesi
- Yazilarin `onay=1` kosuluyla sorgulanmasi
- EJS sablonlari ve parca (`partials`) kullanimi

**Yarim kalan kisim**
- `blog-detay` ve `admin/blog-list` gorunumleri neredeyse bos
- Yonetici tarafinda ekleme/duzenleme/silme islemleri yazilmadi; rotalar
  yalnizca gorunumu donduruyor
- `views/users/blog.ejs` icindeki kartlar ve form Bootstrap belgelerinden
  alinmis ornek bilesenler, gercek veriye bagli degil
- Rotalar `router.get` yerine `router.use` ile tanimlandigi icin `/` rotasi
  eslesmeyen her adresi yakaliyor; 404 sayfasi yok

## Teknolojiler

Node.js, Express 4, EJS, MySQL (`mysql2`), dotenv. Bootstrap CDN'den geliyor.

## Kurulum

```bash
npm install
cp .env.example .env   # veritabani bilgilerinizi yazin
npm start
```

Uygulama http://localhost:3000 adresinde acilir.

Kodun bekledigi tablolar:

```sql
CREATE TABLE new_table (
  id   INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)              -- kategori adi
);

CREATE TABLE blog (
  id    INT AUTO_INCREMENT PRIMARY KEY,
  baslik VARCHAR(200),
  icerik TEXT,
  onay  TINYINT DEFAULT 0        -- yalnizca 1 olanlar listeleniyor
);
```

> Sema depoda yoktu; yukaridaki tablolar kodun okudugu sutunlardan
> cikarildi. `blog` tablosunun `baslik`/`icerik` sutunlari su an hicbir
> gorunumde kullanilmiyor.
