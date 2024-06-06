#include <stdio.h>
#include <time.h>
#include <stdlib.h>

int main(void){
  while(!_kbhit()){
	 _sleep(1);
     printf("\a");		
  }
}
