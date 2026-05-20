import { books } from "../data/content";

function BooksPage() {
  const currentlyReading = [
    "Confessions — Saint Augustine",
    "Blood Meridian — Cormac McCarthy",
    "SPQR — Mary Beard",
    "The Way of Kings — Brandon Sanderson",
  ];

  const wantToRead = [
    "12 Rules for Life — Jordan Peterson",
    "Knowledge of the Holy — A.W. Tozer",
    "Crime and Punishment — Fyodor Dostoevsky",
    "The Handmaid's Tale — Margaret Atwood",
    "The Pursuit of God — A.W. Tozer",
    "God's Pursuit of Man — A.W. Tozer",
    "Tactics — Greg Koukl",
    "Confessions — Saint Augustine",
    "City of God — Saint Augustine",
    "Tremendous — Joey Diaz",
    "The Problem of Pain — C.S. Lewis",
    "Things Christians Need to Know About the Quran — James White",
    "The Forgotten Trinity — James White",
    "Systematic Theology — Wayne Grudem",
    "Knowing God — J.I. Packer",
    "The Cost of Discipleship — Dietrich Bonhoeffer",
    "The Master and Margarita — Mikhail Bulgakov",
    "The Count of Monte Cristo — Alexandre Dumas",
    "The Plague — Albert Camus",
    "Founding Brothers — Joseph J. Ellis",
    "1776 — David McCullough",
    "Anna Karenina — Leo Tolstoy",
    "Heretics — G.K. Chesterton",
    "Orthodoxy — G.K. Chesterton",
    "Tender Is the Flesh — Agustina Bazterrica",
    "The Real Anthony Fauci — RFK",
    "The Pioneers — David McCullough",
    "The Children of Hurin — J.R.R. Tolkien",
    "The Fall of Numenor — J.R.R. Tolkien",
    "The Fall of Gondolin — J.R.R. Tolkien",
    "Beren and Luthien — J.R.R. Tolkien",
    "Slaughterhouse-Five — Kurt Vonnegut Jr.",
    "Paradise Lost — John Milton",
    "Phantastes — George MacDonald",
    "The Princess and the Goblin — George MacDonald",
    "Bonhoeffer — Eric Metaxas",
    "The Everlasting Man — G.K. Chesterton",
    "G-Man: J. Edgar Hoover — Beverly Gage",
    "Thinking in Systems — Donella Meadows",
    "Suicide of a Superpower — Pat Buchanan",
    "Boundaries — Dr. Henry Cloud",
    "Dominion — Tom Holland",
    "Rubicon — Tom Holland",
    "Paul: A Biography — N.T. Wright",
    "Surprised by Hope — N.T. Wright",
    "The Father Brown Series — G.K. Chesterton",
    "The Twelve Caesars — Suetonius",
    "Rape of the Mind — Joost Meerloo",
    "Two Paths — Michael Whelton",
    "The Black Company — Glen Cook",
    "The Dragonbone Chair — Tad Williams",
    "The Broken Sword — Poul Anderson",
    "The Worm Ouroboros — E.R. Eddison",
    "The Last Unicorn — Peter S. Beagle",
    "The Forgotten Beasts of Eld — Patricia A. McKillip",
    "Lilith — George MacDonald",
    "Descent into Hell — Charles Williams",
    "Kristin Lavransdatter — Sigrid Undset",
    "The Death of Ivan Ilyich — Leo Tolstoy",
    "Demons — Fyodor Dostoevsky",
    "A Canticle for Leibowitz — Walter M. Miller Jr.",
    "Lord of the World — Robert Hugh Benson",
    "The Power and the Glory — Graham Greene",
    "The Rise and Fall of the Third Reich — William L. Shirer",
    "The Crusades — Thomas Asbridge",
    "Caesar — Adrian Goldsworthy",
    "Watership Down — Richard Adams",
    "The Killer Angels — Michael Shaara",
    "Jonathan Strange & Mr Norrell — Susanna Clarke",
    "Blood Meridian — Cormac McCarthy",
    "East of Eden — John Steinbeck",
    "Hyperion — Dan Simmons",
    "The Once and Future King (Full Cycle) — T.H. White",
    "Beowulf (Seamus Heaney Translation) — Unknown",
    "The Mabinogion Tetralogy — Evangeline Walton",
    "The Face in the Frost — John Bellairs",
    "The Histories — Herodotus",
    "Meditations — Marcus Aurelius",
    "The Histories — Polybius",
  ];

  const finishedReading = [
    "The Hobbit — J.R.R. Tolkien",
    "A Grief Observed — C.S. Lewis",
    "The Fellowship of the Ring — J.R.R. Tolkien",
    "Mere Christianity — C.S. Lewis",
    "Perelandra — C.S. Lewis",
    "How to Pray — C.S. Lewis",
    "The Return of the King — J.R.R. Tolkien",
    "Endure — Cameron Hanes",
    "Out of the Silent Planet — C.S. Lewis",
    "Notes from Underground — Fyodor Dostoevsky",
    "1984 — George Orwell",
    "That Hideous Strength — C.S. Lewis",
    "The Pursuit of God — A.W. Tozer",
    "The Idiot — Fyodor Dostoevsky",
    "Stolen Focus — Johann Hari",
    "The Once and Future King — T.H. White",
    "Till We Have Faces — C.S. Lewis",
    "Animal Farm — George Orwell",
    "Brave New World — Aldous Huxley",
    "Pilgrim's Progress — John Bunyan",
    "The Brothers Karamazov — Fyodor Dostoevsky",
    "Assassin's Apprentice — Robin Hobb",
    "Royal Assassin — Robin Hobb",
    "The Man Who Was Thursday — G.K. Chesterton",
    "Dracula — Bram Stoker",
    "The Gulag Archipelago — Alexander Solzhenitsyn",
    "The Inheritance Cycle (Series of 4) — Christopher Paolini",
    "Pride and Prejudice — Jane Austen",
    "The Metamorphosis — Franz Kafka",
    "The Great Divorce — C.S. Lewis",
    "The Lion, the Witch and the Wardrobe — C.S. Lewis",
    "Prince Caspian — C.S. Lewis",
    "The Voyage of the Dawn Treader — C.S. Lewis",
    "The Horse and His Boy — C.S. Lewis",
    "The Magician's Nephew — C.S. Lewis",
    "The Two Towers — J.R.R. Tolkien",
    "The Silmarillion — J.R.R. Tolkien",
    "Fire & Blood — George R.R. Martin",
    "The Lightning Thief — Rick Riordan",
    "The Sea of Monsters — Rick Riordan",
    "The Titan's Curse — Rick Riordan",
    "The Battle of the Labyrinth — Rick Riordan",
    "The Last Olympian — Rick Riordan",
    "City of Bones — Cassandra Clare",
    "City of Ashes — Cassandra Clare",
    "City of Glass — Cassandra Clare",
    "Fahrenheit 451 — Ray Bradbury",
    "Can't Hurt Me — David Goggins",
    "Of Mice and Men — John Steinbeck",
    "Surprised by Joy — C.S. Lewis",
    "The Problem of Pain — C.S. Lewis",
    "The Sword in the Stone — T.H. White",
    "The Weight of Glory — C.S. Lewis",
  ];

  return (
    <section className="section-shell py-14">
      <h1 className="font-display text-4xl text-white">Books</h1>
      <p className="mt-3 max-w-2xl text-gray-300">
        What I am reading now, what I want to read next, and what I have
        already finished.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <article
            key={book.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60"
          >
            <div className="aspect-[2/3] overflow-hidden">
              <img
                src={book.image}
                alt={`${book.title} cover`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-3 p-5">
              <h2 className="font-display text-xl text-white">{book.title}</h2>
              <p className="text-sm text-cyan-200">{book.author}</p>
              <p className="text-sm text-gray-300">{book.thoughts}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <h2 className="font-display text-2xl text-white">Currently Reading</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm text-gray-200">
              {currentlyReading.map((book) => (
                <li key={book}>{book}</li>
              ))}
            </ol>
          </article>

          <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <h2 className="font-display text-2xl text-white">Finished Reading</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm text-gray-200">
              {finishedReading.map((book) => (
                <li key={book}>{book}</li>
              ))}
            </ol>
          </article>
        </div>

        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
          <h2 className="font-display text-2xl text-white">Want to Read</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm text-gray-200">
            {wantToRead.map((book) => (
              <li key={book}>{book}</li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  );
}

export default BooksPage;
