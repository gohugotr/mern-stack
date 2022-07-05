import mongoose from 'mongoose'

const notSchema = mongoose.Schema(
  {
    baslik: {
      type: String,
      required: [true, 'Lütfen Not başlığını giriniz'],
    },
    aciklama: {
      type: String,
      required: [true, 'Lütfen Not açıklama giriniz'],
    },
    oncelik: {
      type: Number,
    },
  },
  {
    timestamps: true, // Kayıt ve güncelleme tarihi ekleyecek.
  }
)

const Not = mongoose.model("Not", notSchema);
export default Not;  // EXPORT
