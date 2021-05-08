export default function minDeletions(s) {
   const hash = new Array(26).fill(0);
   const counts = [];
   let numDeletions = 0;

   for (let i = 0; i < s.length; i++) {
       hash[s.charCodeAt(i) - 97]++;
   }
   for (let i = 0; i < hash.length; i++) {
       while (hash[i] > 0 && counts[hash[i]]) {
           hash[i]--;
           numDeletions++;
       }
       counts[hash[i]] = true;
   }
   return numDeletions;
}
