Specifikacija test projekta:

Napraviti novu stranicu i dodati link do nje u navigaciji. Stranicu nazvati
'Menu' (url neka bude '/menu').

https://i.imgur.com/IQakkXs.png

Na toj strnici napraviti tabelu u kojoj ce se prikazivati meni picerije. Table
treba da prikaze sledece informacije:
  - name
  - size
  - price
  - date added

Mokovane podatke dobaviti na sledecem end point-u: https://run.mocky.io/v3/8189a948-cdf2-47a1-9698-f765d50f0f94

https://i.imgur.com/qUlgY4D.png

Dodati defaultno sortiranje da bude po datumu dodavanja opadajuce.

https://i.imgur.com/z7guCaB.png

Dodati iznad tabele jedno input polje za search. Na svaku promenu unosa u tom
input polju, filtrirati listu samo po nazivu.

https://i.imgur.com/Z6nzW40.png

Ispod liste dodati dugme 'Add new' koje ce otvarati dialog box.

https://i.imgur.com/NH6UvvS.png

U tom dialogu je potrebno napraviti jednu formu koja ce sadrzati sledece:
  - name
      required: 'This field is required'

  - slug
      required: 'This field is required',
      format: 'Invalid slug format',
      unique: 'Slug already in use'

  - size // use select input with three options 23/35/50
      required: 'This field is required'

  - price // input number
      required: 'This field is required',
      minimal value: 'Minimal price is 0.01'

  - date // hidden and auto-generated when user click add

Na dialogu treba da postoje dve akcije:
  - Cancel: zatvoriti dialog box
  - Add: ukoliko je forma validna zatvoriti dialog box i dodati uneti item u
      listu

https://i.imgur.com/jSeEb9H.png
https://i.imgur.com/BaHdAel.png

Nakon unosenja nove stavke u Menu, treba zadrzati niz sortiranim.

https://i.imgur.com/fcoFdSc.png

Dodat jos jednu kolonu u tabeli, sa dve akcije:
  - Edit
  - Delete

https://i.imgur.com/xeDZa9B.png

Edit akcija treba da otvori dialog box sa predefinisanom formom u kojoj ce moci
da se menjaju vrednosti. Zadrzati sve validacije kao i prilikom dodavanja.
Edit dialog box treba da ima dve akcije:
  - Cancel: zatvoriti dialog box
  - Update: ukoliko je forma validna zatvoriti dialog box i primeniti izmene u
      listi

Delete akcija treba da izbaci element iz liste

https://i.imgur.com/FMmFUmH.png
