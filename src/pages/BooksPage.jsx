import { books } from "../data/content";

const currentlyReading = [
  "Confessions - Saint Augustine",
  "Blood Meridian - Cormac McCarthy",
  "SPQR - Mary Beard",
  "The Way of Kings - Brandon Sanderson",
];

const wantToRead = [
  "12 Rules for Life - Jordan Peterson",
  "Knowledge of the Holy - A.W. Tozer",
  "Crime and Punishment - Fyodor Dostoevsky",
  "The Handmaid's Tale - Margaret Atwood",
  "The Pursuit of God - A.W. Tozer",
  "God's Pursuit of Man - A.W. Tozer",
  "Tactics - Greg Koukl",
  "City of God - Saint Augustine",
  "Tremendous - Joey Diaz",
  "The Problem of Pain - C.S. Lewis",
  "Systematic Theology - Wayne Grudem",
  "Knowing God - J.I. Packer",
  "The Cost of Discipleship - Dietrich Bonhoeffer",
  "The Master and Margarita - Mikhail Bulgakov",
  "The Count of Monte Cristo - Alexandre Dumas",
  "The Plague - Albert Camus",
  "Anna Karenina - Leo Tolstoy",
  "Heretics - G.K. Chesterton",
  "Orthodoxy - G.K. Chesterton",
  "East of Eden - John Steinbeck",
  "Hyperion - Dan Simmons",
  "Meditations - Marcus Aurelius",
  "Paradise Lost - John Milton",
  "Bonhoeffer - Eric Metaxas",
  "The Everlasting Man - G.K. Chesterton",
  "Dominion - Tom Holland",
  "Rubicon - Tom Holland",
  "Watership Down - Richard Adams",
  "Blood Meridian - Cormac McCarthy",
  "Beowulf (Seamus Heaney Translation)",
  "The Histories - Herodotus",
];

const finishedReading = [
  "The Brothers Karamazov - Fyodor Dostoevsky",
  "The Gulag Archipelago - Alexander Solzhenitsyn",
  "Till We Have Faces - C.S. Lewis",
  "The Idiot - Fyodor Dostoevsky",
  "Notes from Underground - Fyodor Dostoevsky",
  "1984 - George Orwell",
  "Brave New World - Aldous Huxley",
  "Animal Farm - George Orwell",
  "Mere Christianity - C.S. Lewis",
  "The Great Divorce - C.S. Lewis",
  "Surprised by Joy - C.S. Lewis",
  "The Weight of Glory - C.S. Lewis",
  "The Problem of Pain - C.S. Lewis",
  "Out of the Silent Planet - C.S. Lewis",
  "Perelandra - C.S. Lewis",
  "That Hideous Strength - C.S. Lewis",
  "The Screwtape Letters - C.S. Lewis",
  "Pilgrim's Progress - John Bunyan",
  "The Fellowship of the Ring - J.R.R. Tolkien",
  "The Two Towers - J.R.R. Tolkien",
  "The Return of the King - J.R.R. Tolkien",
  "The Hobbit - J.R.R. Tolkien",
  "The Silmarillion - J.R.R. Tolkien",
  "Dracula - Bram Stoker",
  "The Man Who Was Thursday - G.K. Chesterton",
  "Pride and Prejudice - Jane Austen",
  "The Metamorphosis - Franz Kafka",
  "Fahrenheit 451 - Ray Bradbury",
  "Of Mice and Men - John Steinbeck",
  "Can't Hurt Me - David Goggins",
  "Endure - Cameron Hanes",
  "Stolen Focus - Johann Hari",
  "Fire & Blood - George R.R. Martin",
];

function BookListSection({ label, number, items }) {
  return (
    <div className="panel-gold p-8">
      <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.2em] text-gold">
        {number}
      </span>
      <h2 className="mb-5 font-display text-[22px] font-bold text-paper">
        {label}
      </h2>
      <ol className="m-0 list-decimal space-y-1 pl-5">
        {items.map((book) => (
          <li
            key={book}
            className="font-body text-[13px] leading-7 text-paper/60"
          >
            {book}
          </li>
        ))}
      </ol>
    </div>
  );
}

function BooksPage() {
  return (
    <section className="section-shell pb-20 pt-14">
      <div className="mb-10 border-b border-gold pb-6">
        <span className="eyebrow">03 / Books</span>
        <h1 className="font-display text-[clamp(36px,5vw,52px)] font-bold leading-tight text-paper">
          What I'm <em className="text-gold not-italic">Reading</em>
        </h1>
      </div>

      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book, i) => (
          <article key={book.title} className="panel-gold p-7">
            {book.image && (
              <div className="mb-5 aspect-[3/4] overflow-hidden bg-white/5">
                <img
                  src={book.image}
                  alt={`${book.title} cover`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            )}
            <div className="mb-4 font-mono text-[9px] tracking-[0.15em] text-gold-dim">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="mb-[-0.25rem] font-display text-5xl leading-none text-gold/20">
              &quot;
            </div>
            <h2 className="mb-1 font-display text-xl font-bold leading-tight text-paper">
              {book.title}
            </h2>
            <div className="mb-4 font-display text-xs italic text-gold-dim">
              {book.author}
            </div>
            <p className="text-xs leading-7 text-muted">{book.thoughts}</p>
          </article>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-3">
        <BookListSection
          label="Currently Reading"
          number="Now"
          items={currentlyReading}
        />
        <BookListSection
          label="Finished"
          number="Done"
          items={finishedReading}
        />
        <BookListSection
          label="Want to Read"
          number="Queue"
          items={wantToRead}
        />
      </div>
    </section>
  );
}

export default BooksPage;
