
type HangmanWordProps={
      guessedWord:string[],
      wordToGuess:string,
      reveal:boolean
}

export const HangmanWord=({guessedWord,wordToGuess,reveal}:HangmanWordProps)=>{
      const word=wordToGuess;
      const guessedWords=guessedWord;

      return (
            <div  style={{
                  display:"flex",
                  gap:'.25em',
                  fontSize:'6rem',
                  fontWeight:'bold',
                  textTransform:'uppercase',
                  fontFamily:'monospace'
            }} >

                  {
                        word.split("").map((letter,index)=>(
                              <span style={{ borderBottom:'.1em solid black' }}  key={index}>
                                    <span style={{
                                          visibility:guessedWords.includes(letter) || reveal ?'visible' : 'hidden',
                                          color: !guessedWord.includes(letter) && reveal? 'red' :'black'
                                    }} >
                                          {letter}
                                    </span>
                              </span>
                        ))
                  }
            </div>
      )
}