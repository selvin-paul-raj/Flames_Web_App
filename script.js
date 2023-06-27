
            const calculateFlames = () => {
        const name1 = document.getElementById('name1').value.toLowerCase();
        const name2 = document.getElementById('name2').value.toLowerCase();

        if (!name1 || !name2) {
          document.getElementById('error').textContent = 'Please enter both names.';
          document.getElementById('result').textContent = '';
          return;
        }

        const formattedName1 = name1.replace(/\s/g, '');
        const formattedName2 = name2.replace(/\s/g, '');

        if (formattedName1.length === 0 || formattedName2.length === 0) {
          document.getElementById('error').textContent = 'Please enter valid names.';
          document.getElementById('result').textContent = '';
          return;
        }

        const name1Chars = formattedName1.split('');
        const name2Chars = formattedName2.split('');

        const remainingChars1 = name1Chars.filter((char) => !name2Chars.includes(char));
        const remainingChars2 = name2Chars.filter((char) => !name1Chars.includes(char));

        const totalCount = remainingChars1.length + remainingChars2.length;

        const flamesMapping = {
          F: 'Friends ',
          L: 'Love ❤',
          A: 'Affection',
          M: 'Marriage',
          E: 'Enemies',
          S: 'Sibling',
        };

        let currentCount = 0;

        while (Object.keys(flamesMapping).length > 1) {
          const remainingCount = totalCount - currentCount;
          const index = remainingCount % Object.keys(flamesMapping).length;

          const keyToRemove = Object.keys(flamesMapping)[index];
          delete flamesMapping[keyToRemove];

          const charsToRemove = remainingChars1.concat(remainingChars2).filter((char) => char !== keyToRemove);
          remainingChars1.splice(0, remainingChars1.length);
          remainingChars2.splice(0, remainingChars2.length);

          for (const char of charsToRemove) {
            if (remainingChars1.includes(char)) {
              const index = remainingChars1.indexOf(char);
              remainingChars1.splice(index, 1);
            } else if (remainingChars2.includes(char)) {
              const index = remainingChars2.indexOf(char);
              remainingChars2.splice(index, 1);
            }
          }

          currentCount = remainingChars1.length + remainingChars2.length;
        }

        document.getElementById('error').textContent = '';
        document.getElementById('result').textContent = Object.values(flamesMapping)[0];
      };

      const resetFlames = () => {
        document.getElementById('error').textContent = '';
        document.getElementById('result').textContent = '';
        document.getElementById('name1').value = '';
        document.getElementById('name2').value = '';
      };
    