/*
 * File:   main.c
 * Author: Leonardo
 */

#define _CRT_SECURE_NO_WARNINGS
 
#include <stdio.h>
#include <stdlib.h>

#define MAX_LENGTH 100

/*
 * Programming Assignment 1
 */
int main(int argc, char** argv)
{
	char input[MAX_LENGTH];
	fgets(input, MAX_LENGTH, stdin);
	while (input[0] != 'q')
	{
		printf("H\nHe\nLi\nBe\nB\nC\nN\nO\nF\nNe");

		fgets(input, MAX_LENGTH, stdin);
	}

	return 0;
}
